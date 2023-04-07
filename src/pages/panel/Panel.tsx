import React from 'react'
import '@pages/panel/Panel.css'
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'

import { tableCellClasses } from '@mui/material/TableCell'
import { tableBodyClasses } from '@mui/material/TableBody'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt'
import StopCircleIcon from '@mui/icons-material/StopCircle'

import { styled } from '@mui/system'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid red',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'green',
    color: 'white',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: '1px solid red',
}))

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

for (let i = 0; i < 100; i++) {
  rows.push(createData('Ice cream sandwich', 237, 9.0, 37, i))
}

const funcClick = () => {
  alert('okoko')
}

const Panel: React.FC = () => {
  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: 'white' }} position="sticky">
          <Toolbar disableGutters={true}>
            <Grid style={{ margin: '5px' }} spacing={3}>
              <Grid item xs={12} style={{ marginBottom: '5px' }} spacing={2}>
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    height: 30,
                    textTransform: 'capitalize',
                  }}
                  startIcon={<StopCircleIcon />}
                >
                  Stop
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    height: 30,
                    textTransform: 'capitalize',
                  }}
                  startIcon={<DoDisturbAltIcon />}
                >
                  Clear
                </Button>
              </Grid>
              <Grid item spacing={1}>
                <TextField
                  placeholder="Search"
                  type="text"
                  inputProps={{
                    style: {
                      width: 200,
                      height: 30,
                      padding: '5px',
                      boxSizing: 'border-box',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    height: 30,
                    textTransform: 'capitalize',
                  }}
                >
                  Filter
                </Button>
                <FormControl sx={{ minWidth: 80 }}>
                  <Select defaultValue={10} style={{ height: 30 }}>
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Fetch/XHR</MenuItem>
                    <MenuItem value={30}>JS</MenuItem>
                    <MenuItem value={30}>CSS</MenuItem>
                    <MenuItem value={30}>Img</MenuItem>
                    <MenuItem value={30}>Media</MenuItem>
                    <MenuItem value={30}>Font</MenuItem>
                    <MenuItem value={30}>Doc</MenuItem>
                    <MenuItem value={30}>WS</MenuItem>
                    <MenuItem value={30}>Wasm</MenuItem>
                    <MenuItem value={30}>Manifest</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>

                <ButtonGroup variant="outlined" style={{ height: 30 }}>
                  <Button variant="contained">GET</Button>
                  <Button>PUT</Button>
                  <Button>POST</Button>
                  <Button>DELETE</Button>
                  <Button>PATH</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Paper sx={{ width: '100%', overflow: 'hidden', position: 'fixed' }}>
        <TableContainer component={Paper} sx={{ maxHeight: '100vh' }} style={{ marginTop: '5px' }}>
          <Table stickyHeader size={'small'}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Method</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Protocol</StyledTableCell>
                <StyledTableCell align="left">Domain</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.name}
                  onClick={funcClick}
                  sx={{ cursor: 'pointer' }}
                >
                  <StyledTableCell
                    align="left"
                    sx={{
                      maxWidth: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.calories}</StyledTableCell>
                  <StyledTableCell align="left">{row.fat}</StyledTableCell>
                  <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="left">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Box>
    </>
  )
}

export default Panel
