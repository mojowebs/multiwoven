import { ColumnMapType } from "@/utils/types";

export type TableDataType = {
	columns: Array<ColumnMapType>;
	data: Array<{}>;
};

export type ModelTableRow = {
	id: string;
	name: string;
	description: string;
	query: string;
	query_type: string;
	created_at: string;
	updated_at: string;
};

export type ModelTableDataType = {
	columns: Array<string>;
	data: Array<ModelTableRow>;
};

export type TableType = {
	title?: string | JSX.Element;
	data: TableDataType;
	size?: string;
	headerColor?: string;
	headerColorVisible?: boolean;
	borderRadius?: string;
	maxHeight?: string;
	onRowClick?: (args: ModelTableRow | unknown) => void;
};
