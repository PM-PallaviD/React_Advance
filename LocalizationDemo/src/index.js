import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Paper, InputLabel, TextField, Box, Button, Typography, MenuItem, FormControl, Select } from "@mui/material";
import { InputGroup } from "reactstrap";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tEn from './locales/en/transaltion.json';
import tDe from './locales/de/transaltion.json';
import tMr from './locales/mr/transaltion.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn
      },
      de: {
        translation: tDe
      },
      mr: {
        translation: tMr
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const changeLang = (l) => {
  //alert('OK');
  return () => {
    //alert('ok '+l);
    //Now change the language
    //object.member();
    i18n.changeLanguage(l);

    //Now set the current language in local storage
    localStorage.setItem('lang', l);

  }
}

function App() { // My App component is a functional component
  const { t } = useTranslation();

  useEffect(() => {
    //alert('Page is loaded successfully');
    //get the current language stored in the local storage
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  }, [])

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>

      <form>

        <Paper elevation={12}
          sx={{
            width: 600,
            padding: "50px 50px 50px 50px",
            margin: "auto",
            marginTop: "80px",
          }}
        >
          <Box sx={{ width: 150 ,marginBottom:"100px"}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="language"
                onChange={handleChange}
              >
                <Button onClick={changeLang('en')} value={10}>English</Button>
                <Button onClick={changeLang('de')} value={20}>Dutch</Button>
                <Button onClick={changeLang('mr')} value={30}>Marathi</Button>
              </Select>
            </FormControl>
          </Box>
          <Typography
            className='heading'
            variant="h4"
            gutterBottom
          >
            {t('formlableone')}</Typography>
          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom >{t('firstnamelabel')}</InputLabel>
            <TextField fullWidth />
          </InputGroup>

          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom> {t('addresslabel')}</InputLabel>
            <TextField  fullWidth />
          </InputGroup>
          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom>{t('phonelabel')}</InputLabel>
            <TextField  fullWidth />
          </InputGroup>
          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom> {t('emaillabel')}</InputLabel>
            <TextField  fullWidth />
          </InputGroup>
          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom> {t('usernamelabel')}</InputLabel>
            <TextField  fullWidth />
          </InputGroup>
          <InputGroup>
            <InputLabel className=' mt-2' gutterBottom> {t('passwordlabel')}</InputLabel>
            <TextField  name="password" fullWidth />
          </InputGroup>
          <Box className='mt-2'>
            <a href="/signin"  >Sign Up Here</a>
          </Box>
          <Box textAlign='right'>
            <Button
              variant="contained"
              className='mt-2 heading'
            >
              {t('button1label')}</Button>
          </Box>

        </Paper>
      </form>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
