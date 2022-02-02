import Style from "./StylesComponents.module.css"
import {styled} from "@mui/material/styles";
import {Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from "@mui/material";
import {BootstrapPrimaryButton} from "./Button";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F2F2F2',
        color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#F2F2F2',
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    'table': {
        borderLeft: 0
    }
}));

function createData(
    name: string,
    calories: number,
) {
    return {name, calories};
}

const rows = [
    createData('Document 1', 159,),
    createData('Document 2', 237),
];

function AssignedToMeCard() {
    return (
        <div className={Style.AssignToMeContainer}>
            <p style={{fontWeight: 'bold', fontSize: 32, marginLeft: 15}}>Assigned to Me (2)</p>
            <p style={{fontSize: 17, marginLeft: 15}}>Document(s) that requires your attention</p>
            <div className={Style.TableContainer}>
                <TableContainer component={Paper} style={{backgroundColor: '#F2f2f2'}}>
                    <Table sx={{width: '100%'}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <BootstrapPrimaryButton variant="contained" disableRipple>
                                            <span>
                                            Sign Document
                                            </span>
                                        </BootstrapPrimaryButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={Style.FooterContainer}>
                VIEW ALL
            </div>
        </div>
    )
}

export default AssignedToMeCard

