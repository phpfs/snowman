import { databaseBackend, Table } from '../../../../database';
import { latest } from '../../../../database/schemas';
import { loadTableFromDatabase } from '../../../../database/table/loader';
import { Column } from '../../../../database/tools/types';
import { ExperimentId } from '../../../../server/types';

type ExperimentSchema = ReturnType<
  typeof latest.tableSchemas['experiment']['experiment']
>;

export class ExperimentFileGetter {
  protected table: Table<ExperimentSchema>;
  protected columns: Column[];
  constructor(private readonly id: ExperimentId) {
    this.table = loadTableFromDatabase<ExperimentSchema>(
      latest.tableSchemas.experiment.experiment(id)
    );
    this.columns = Object.values(this.table.schema.columns);
  }

  *iterate(
    startAt?: number,
    limit?: number,
    sortBy?: string
  ): IterableIterator<string[]> {
    startAt = startAt ?? 0;
    limit = limit ?? -1;
    if (sortBy) {
      if (
        !(
          latest.experimentCustomColumnPrefix + sortBy in
          this.table.schema.columns
        )
      ) {
        throw new Error(
          `Cannot sort by ${sortBy} as this column does not exist.`
        );
      } else {
        sortBy = latest.experimentCustomColumnPrefix + sortBy;
      }
    } else {
      sortBy = this.table.schema.columns.id1.name;
    }
    yield this.columns.map((column) =>
      column.name.startsWith(latest.experimentCustomColumnPrefix)
        ? column.name.substring(latest.experimentCustomColumnPrefix.length)
        : column.name
    );
    yield* databaseBackend()
      .prepare(
        `
            SELECT ${this.getColumnsString()}
            FROM ${this.table}
        ORDER BY "${sortBy}"
           LIMIT @limit OFFSET @startAt
      `
      )
      .raw(true)
      .iterate({ startAt, limit });
  }

  private getColumnsString(): string {
    return this.columns.map((column) => `"${column.name}"`).join(',');
  }
}
