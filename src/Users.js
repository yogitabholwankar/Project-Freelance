import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "react-bootstrap/Container";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    GridPrintGetRowsToExportParams,
    gridFilteredSortedRowIdsSelector,
    selectedGridRowsSelector,
    GridRowId
} from "@mui/x-data-grid";

const getSelectedRowsToExport = ({
    apiRef
}: GridPrintGetRowsToExportParams): GridRowId[] => {
    const selectedRowIds = selectedGridRowsSelector(apiRef);
    if (selectedRowIds.size > 0) {
        return Array.from(selectedRowIds.keys());
    }

    return gridFilteredSortedRowIdsSelector(apiRef);
};

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [startDate, setStartDate] = useState(dayjs("2022-04-17"));
    const [endDate, setEndDate] = useState(dayjs("2022-04-17"));
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        setUserList([
            {
                index: 1,
                first_name: "Data Report 1",
                creation_date: "11.11.2021"
            },
            {
                index: 2,
                first_name: "Data Report 2",
                creation_date: "11.11.2022"
            },
            {
                index: 3,
                first_name: "Data Report 3",
                creation_date: "09.05.2022"
            },
            {
                index: 4,
                first_name: "Data Report 4",
                creation_date: "09.05.2028"
            },
            {
                index: 5,
                first_name: "Data Report 5",
                creation_date: "09.05.2025"
            },
            {
                index: 6,
                first_name: "Data Report 6",
                creation_date: "09.05.2022"
            },
            {
                index: 7,
                first_name: "Data Report 7",
                creation_date: "09.05.2022"
            },
            {
                index: 8,
                first_name: "Data Report 8",
                creation_date: "09.05.2022"
            },
            {
                index: 9,
                first_name: "Data Report 9",
                creation_date: "09.05.2022"
            },
            {
                index: 10,
                first_name: "Data Report 10",
                creation_date: "09.05.2022"
            },
            {
                index: 8,
                first_name: "Data Report 8",
                creation_date: "09.05.2022"
            },
            {
                index: 9,
                first_name: "Data Report 9",
                creation_date: "09.05.2022"
            },
            {
                index: 10,
                first_name: "Data Report 10",
                creation_date: "09.05.2022"
            },
            {
                index: 11,
                first_name: "Data Report 8",
                creation_date: "09.05.2022"
            },
            {
                index: 12,
                first_name: "Data Report 9",
                creation_date: "09.05.2022"
            },
            {
                index: 13,
                first_name: "Data Report 10",
                creation_date: "09.05.2022"
            },
            {
                index: 14,
                first_name: "Data Report 8",
                creation_date: "09.05.2022"
            },
            {
                index: 15,
                first_name: "Data Report 9",
                creation_date: "09.05.2022"
            },
            {
                index: 16,
                first_name: "Data Report 10",
                creation_date: "09.05.2022"
            }
        ]);
    }, []);
    const top100Films = [
        { label: "Sales", year: 1994 },
        { label: "Inventory", year: 1972 },
        { label: "Assests", year: 1974 }
    ];
    const columns = [
        {
            field: "index",
            headerName: "Index",
            width: 100
        },
        {
            field: "first_name",
            headerName: "Report name",
            width: 300
        },
        {
            field: "creation_date",
            headerName: "Creation Date",
            width: 300
        },
        {
            field: "selected_data",
            headerName: "Selected Reports",
            width: 300
        }
    ];

    const onSelection = (ids) => {
        const selectedIDs = new Set(ids);
        const selectedRows = userList.filter((row) =>
            selectedIDs.has(row.index),
        );
        setSelectedRows(selectedRows);
        userList.forEach((row) => {
            if (!selectedRows.includes(row.index)) {
                row["selected_data"] = "";
            }
        })
        setUserList([...userList]);
        userList.map((obj) => {
            selectedRows.map((row) => {
                if (obj.index === row.index) {
                    obj["selected_data"] =
                        obj.first_name + " and " + obj.creation_date + " is selected ";
                }
            });
        });
        setUserList([...userList]);

    };
    return (
        <Container>
            {JSON.stringify(selectedRows)}
            <Row>
                <Col className="pr-2 pt-2 pl-0">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Report Name" />
                        )}
                    />
                </Col>
                <Col>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Col>
                <Col >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Col>
                <Col className="p-2">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Report Types" />
                        )}
                    />
                </Col>
            </Row>
            <hr></hr>


            <Row className="m-30">
                {
                    userList ?
                        <DataGrid
                            checkboxSelection
                            disableRowSelectionOnClick
                            isRowSelectable={(params) => params.row.index > 3}
                            autoHeight
                            rows={userList}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: {
                                    printOptions: { getRowsToExport: getSelectedRowsToExport }
                                }
                            }}
                            columns={columns}
                            getRowId={(row) => row.index}
                            onRowSelectionModelChange={(params) => onSelection(params)}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 5 } },
                            }}
                            pageSizeOptions={[5, 10, 25]}
                            {...userList}
                        />
                        :
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="warning">
                                <AlertTitle>Warning</AlertTitle>
                                Select Report name , start and end date to see the reports details .
                            </Alert>
                        </Stack>

                }
            </Row>
            {JSON.stringify(userList)}
        </Container>
    );
}

export default Users;
