import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAlert } from './components/MuiAlert';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiBottomNav } from './components/MuiBottomNav';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import MuiButton from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiChip } from './components/MuiChip';
import { MuiDialog } from './components/MuiDialog';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiIcon } from './components/MuiIcon';
import { MuiImageList } from './components/MuiImageList';
import { MuiLayout } from './components/MuiLayout';
import { MuiLink } from './components/MuiLink';
import { MuiList } from './components/MuiList';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiProgress } from './components/MuiProgress';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiResponsiveness } from './components/MuiResponsiveness';
import { MuiSelect } from './components/MuiSelect';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTable } from './components/MuiTable';
import MuiTextField from './components/MuiTextField';
import { MuiTooltip } from './components/MuiTooltip';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>   
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}
      {/* <MuiButton/> */}
      {/* <MuiIcon/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiLink/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNav/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiBadge/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackbar/> */}
      {/* <MuiDialog/>  */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      <MuiResponsiveness/>
    </div>
    </ThemeProvider>
  );
}

export default App;
