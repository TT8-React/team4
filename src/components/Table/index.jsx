import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";
import imaDelete from "../../assets/Images/delete.svg";
import imgeEdit from "../../assets/Images/edit.svg";

const tableHeadData = [
  { id: 1, label: "Report1" },
  { id: 2, label: "Report2" },
  { id: 3, label: "Report3" },
  { id: 4, label: "Report4" },
  { id: 5, label: "Report5" },
  { id: 6, label: "Report6" },
  { id: 7, label: "Report7" },
  { id: 8, label: "Action", borderRight: 0,align:"center" },
];

const tableCellStyles = {
  padding: "20px",
  width: "12.5%",
  borderRight: "1px solid #828282",
  borderBottom: "0",
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#000000',
};

const tableRowStyles = {
  display: "flex",
  width: "100%",
};

const tableHeaderRowStyles = {
  ...tableRowStyles,
bgcolor: "#E5E5E5",
};

const tableActionCellStyles = {
  ...tableCellStyles,
  borderRight: "0",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const tableData = [
  { id: 1, report: "Lorem Ipsum" },
  { id: 2, report: "Lorem Ipsum" },
  { id: 3, report: "Lorem Ipsum" },
  { id: 4, report: "Lorem Ipsum" },
  { id: 5, report: "Lorem Ipsum" },
];

const Tabel = () => {
  return (
    <TableContainer sx={{ width: "90%", margin: "40px auto" }}>
      <Table sx={{ display: "flex", flexDirection: "column", border: "1px solid #828282",borderBottom:"0",borderRadius:"1px" }}>
        <TableHead sx={{ borderBottom: "1px solid #828282", }}>
          <TableRow sx={tableHeaderRowStyles}>
            {tableHeadData.map((item) => (
              <TableCell key={item.id} sx={{ ...tableCellStyles, borderRight: item.borderRight !== undefined ? item.borderRight : "1px solid #828282",
              textAlign: item.align,
               fontWeight: 700}}>
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} sx={{...tableRowStyles,borderBottom:"1px solid #828282"}}>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableCellStyles}>{row.report}</TableCell>
              <TableCell sx={tableActionCellStyles}>
                <img src={imgeEdit} alt="Edit" />
                <img src={imaDelete} alt="Delete" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabel;
