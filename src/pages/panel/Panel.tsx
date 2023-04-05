import React from 'react'
import '@pages/panel/Panel.css'
import {
  Container,
  Stack,
  TextField,
  FormGroup,
  ButtonGroup,
  FormControl,
  Select,
  MenuItem,
  Box,
} from '@mui/material'
import Button from '@mui/material/Button'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt'
import StopCircleIcon from '@mui/icons-material/StopCircle'

const Panel: React.FC = () => {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Stack direction={'row'} spacing={2}>
          <Button
            color="error"
            variant="contained"
            size="small"
            startIcon={<StopCircleIcon />}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<DoDisturbAltIcon />}
          >
            Clear
          </Button>
        </Stack>
        <Stack direction={'row'} spacing={2} sx={{mt: 2}}>
          <TextField placeholder="Search" size="small" variant="outlined" />
          <Button variant="contained" size="small">
            Filter
          </Button>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <Select defaultValue={10}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <ButtonGroup variant="contained" size="small" >
            <Button>GET</Button>
            <Button>PUT</Button>
            <Button>POST</Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  )
}

export default Panel
