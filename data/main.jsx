const httpPrefix='';
const { useState } = window.React;

const { createTheme, ThemeProvider, Checkbox, AppBar, Toolbar, IconButton, Icon, MenuIcon, Typography } = window.MaterialUI;
const { Badge, withStyles, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } = window.MaterialUI;
const { Box, Dialog, Slide, Button, TextField, FormControlLabel } = window.MaterialUI;

const { AreaChart, Area, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } = window.Recharts;

const typography={
  littleHeader: {
    color: 'red'
  },
  littleValue: {
    lineHeight: 1.0,
    fontSize: "3.75rem",
    fontWeight: 100
  }
};
    
const lightTheme = createTheme({
    palette: {
      mode: 'light',
      type: 'light'
    },
    typography
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    type: 'dark'
  },
  typography
});
const drawerWidth = 240;

const mainAppStyle = theme => ({
    root: {
      display: 'flex'
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appbarOpened: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbarTitle: {
      "flex-grow": 1
    },
    drawer: {
      whiteSpace: 'nowrap',
      "z-index": 0,
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClosed: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    drawerHeader: {
      display: "flex",
      "flex-wrap": "nowrap",
      "min-height": "64px",
      "flex-direction": "row",
      "justify-content": "space-between"
    },
    displayMode: {
      display: "flex",
      "flex-wrap": "nowrap",
      "flex-direction": "row",
      "justify-content": "flex-start",
      "align-items": "center"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 10,
      overflow: 'auto',
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    contentShrinked: {
      "padding-left": drawerWidth + 10,
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    optionSelected: {
      color: "aquamarine"
    }
  });
  const configStyle = theme => ({
    configBar: {
        "padding-top": "65px"
    },
    configDisplay: {
        "display": "flex",
        "column-gap": "10px",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
    },
    saveIcons: {
        display: "flex",
        "flex-direction": "column"
    },
    cblabel: {
        "margin-left": "initial"
    }
});const statsStyle = theme => ({
    root: {
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "align-content": "flex-start",
        "justify-content": "flex-start",
        "align-items": "flex-start"
    }
});

const statStyle = theme => ({
    root: {
      display: 'flex'
    }
});
const chartStyle = theme => ({
    root: {
        "display": "flex",
        "flex-direction": "column",
        "flex-wrap": "wrap",
        "align-content": "flex-start",
        "justify-content": "flex-start",
        "align-items": "stretch"
    },
    header: {
        "display": "flex",
        "flex-direction": "column",
        "flex-wrap": "nowrap",
        "justify-content": "center",
        "align-items": "stretch"
    },
    stats: {
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
        "padding": "0px"
    },
    stat: {
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
        "padding": "0px",
        "column-gap": "3px"
    },
    tooltipContent: {
        "display": "flex",
        "flex-direction": "column",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "justify-content": "center",
        "align-items": "stretch",
        "background-color": "black",
        "padding": "5px"
    },
    tooltipHeader: {
        "font-size": "medium",
        "display": "flex",
        "flex-direction": "column",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "align-items": "center",
        "justify-content": "center",
        "border-bottom": "solid 1px"
    },
    threads: {
        "margin": "0px",
        "padding": "0px",
        "display": "flex",
        "flex-direction": "column",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "justify-content": "center",
        "align-items": "stretch",
        "font-size": "small",
    },
    thread: {
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "justify-content": "space-between",
        "align-items": "center",
        "column-gap": "5px",
    },
    threadValue: {
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "smaller",
        "color": "aquamarine",
        "column-gap": "3px"
    },
    threadSummary: {
        "font-size": "x-small",
        "color": "aqua"
    }
});
const MainApp = withStyles(mainAppStyle)(props => {
    const { classes } = props;
    const [drawerOpened, setDrawerOpened] = React.useState(false);
    const [mode, setMode] = React.useState('dark');
    const [stats, setStats] = React.useState(true);
    const [designer, setDesigner] = React.useState(false);
    const [config, setConfig] = React.useState(false);
    const [statsRefreshRate, setStatsRefreshRate ] = React.useState(3);
    const [maxSamples, setMaxSamples ] = React.useState(50);
    const [animateChart, setAnimateChart ] = React.useState(false);

    const siteConfig = {
        statsRefreshRate: {
            name: "Refresh rate",
            value: statsRefreshRate,
            setter: setStatsRefreshRate,
            type: "int"
        },
        statsAnimateChange: {
            name: "Animate chart changes",
            value: animateChart,
            setter: setAnimateChart,
            type: "boolean"
        },
        maxSamples: {
            name: "Number of chart points",
            value: maxSamples,
            setter: setMaxSamples,
            type: "int"
        }
    };
    
    return <ThemeProvider theme={mode == "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box className={classes.root}>
            <AppBar className={[classes.appbar,drawerOpened && classes.appbarOpened].join(" ")}>
                <Toolbar>
                    <IconButton 
                        aria-label="Open drawer" 
                        onClick={()=>setDrawerOpened(!drawerOpened)} 
                        className={drawerOpened && classes.drawerClosed}>
                        <Icon>{drawerOpened ? "chevron" : "menu"}</Icon>
                    </IconButton>
                    <Typography
                        className={classes.toolbarTitle}
                        component="h1"
                        variant="h6">
                        Night Driver Strip
                    </Typography>
                    <IconButton>
                    <Badge aria-label="Alerts" badgeContent={4} color="secondary">
                        <Icon>notifications</Icon>
                    </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" 
                    classes={{paper: [classes.drawer, !drawerOpened && classes.drawerClosed].join(" ")}}>
                <div className={classes.drawerHeader}>
                    <Box className={classes.displayMode}>
                        <IconButton onClick={()=>setMode(mode === "dark" ? "light" : "dark")} ><Icon>{mode === "dark" ? "dark_mode" : "light_mode"}</Icon></IconButton>
                        <ListItemText primary={(mode === "dark" ? "Dark" : "Light") + " mode"}/>
                    </Box>
                    <IconButton onClick={()=>setDrawerOpened(!drawerOpened)}>
                        <Icon>chevron_left</Icon>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {
                        [{caption:"Statistics", flag: stats, setter: setStats, icon: "area_chart"},
                         {caption:"Effects Designer", flag: designer, setter: setDesigner, icon: "design_services"},
                         {caption:"Settings", flag: config, setter: setConfig, icon: "settings"}].map(item => 
                        <ListItem key={item.caption}>
                            <ListItemIcon><IconButton onClick={() => item.setter(!item.flag)}>
                                <Icon className={item.flag && (item.icon !== "settings") && classes.optionSelected}>{item.icon}</Icon>
                            </IconButton></ListItemIcon>
                            <ListItemText primary={item.caption}/>
                        </ListItem>)
                    }
                </List>
            </Drawer>
            <Box className={[classes.content, drawerOpened && classes.contentShrinked].join(" ")}>
                {stats && <StatsPanel siteConfig={siteConfig}/>}
                {config && <ConfigDialog siteConfig={siteConfig} onClose={()=>setConfig(false)} />}
            </Box>
        </Box>
    </ThemeProvider>;
});
function getConfigValue(value, type) {
    switch (type) {
        case "int":
            return parseInt(value)
        case "float":
            return parseFloat(value)
        default:
            return value;
    }
}

const ConfigItem = withStyles(configStyle)(props => {
    const { name, value, configItemUpdated, datatype, classes } = props;
    const [ editing, setEditing] = React.useState(false);
    const [ configValue, setConfigValue] = React.useState(value);

    if (datatype === "boolean") {
        return <ListItem button onClick={_evt=>!editing && setEditing(!editing)}>
            <FormControlLabel
                className={classes.cblabel}
                label={name} 
                labelPlacement="start"
                control={<Checkbox 
                    defaultChecked={value}
                    onChange={event => {
                        setConfigValue(event.target.checked);
                        configItemUpdated(event.target.checked);
                    }} />} />
        </ListItem>;
    }

    return <ListItem button onClick={_evt=>!editing && setEditing(!editing)}>
                {!editing && <ListItemText className={ classes.configDisplay }
                    primary={name}
                    secondary={configValue}/>}
                {editing && <TextField label={name} 
                                       variant="outlined"
                                       defaultValue={value}
                                       onChange={event => setConfigValue(getConfigValue(event.target.value),datatype) } />}
                    <Box className={classes.saveIcons}>
                        {editing && <IconButton color="primary" 
                                            aria-label="Save" 
                                            component="label"
                                            onClick={_evt => {
                                                configItemUpdated(configValue)
                                                setEditing(false);
                                            }}>
                                    <Icon>save</Icon>
                                </IconButton>}
                        {editing && <IconButton color="primary" 
                                                aria-label="Cancel" 
                                                component="label"
                                                onClick={_evt => {
                                                    setConfigValue(value);
                                                    setEditing(false);
                                                }}>
                                        <Icon>cancel</Icon>
                                    </IconButton>}
                    </Box>
            </ListItem>;
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfigDialog = withStyles(configStyle)(props => {
  const [open, setOpen] = React.useState(true);
  const { classes, onClose, siteConfig } = props;

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Icon>close</Icon>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Configuration
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.configBar}>
          <ListItem>
            <List>
            <ListItemText primary="Site Configuration"/>
                <List>
                    {Object.values(siteConfig).map(entry => <ConfigItem 
                                               name={entry.name}
                                               key={entry.name}
                                               datatype={entry.type}
                                               value={entry.value}
                                               configItemUpdated={entry.setter} />)}
                </List>
            </List>
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
});/**
 * @param numOfSteps: Total number steps to get color, means total colors
 * @param step: The step number, means the order of the color
 */
const rainbow = (numOfSteps, step) => {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    
    let r, g, b;
    let h = step / numOfSteps;
    let i = ~~(h * 6);
    let f = h * 6 - i;
    let q = 1 - f;
    // eslint-disable-next-line default-case
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    let c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}

const getStatTooltip = (data, classes) => {
    return <div className={classes.tooltipContent}>
        <div className={classes.tooltipHeader}>{data.labelFormatter(data.label)}</div>
        <ul className={classes.threads}>
            {data.payload
                 .sort((a,b) => a.value === b.value ? 0 : (a.value < b.value || -1))
                 .map(stat => <div key={stat.name} className={classes.thread}>
                <div className={classes.threadName} style={{color:stat.fill === "black" ? "lightgreen" : stat.fill}}>{stat.name}</div>
                <div className={classes.threadValue}>{stat.value.toFixed(2)}<div className={classes.threadSummary}>
                    ({(stat.value/data.payload.reduce((ret,stat) => ret + stat.value,0)*100).toFixed(2)}%)
                    </div></div>
            </div>)}
        </ul>
    </div>
}

const AreaStat = withStyles(chartStyle)(props => {
    const { classes, name, rawvalue, ignored, statsAnimateChange, maxSamples, registerStatCallback, headerField } = props;
    const [value, setValue] = React.useState(Object.entries(rawvalue)
                        .filter(entry=>!ignored.includes(entry[0]))
                        .reduce((ret,entry)=>{ret[entry[0]] = entry[1]; return ret},{}));
    const [lastStates, setLastStates] = React.useState([Object.entries(value)
                                             .reduce((ret,stat)=>{ret[stat[0]]=stat[1]; return ret},{ts: new Date().getTime()})]);
    
    registerStatCallback && registerStatCallback(name, value => {
        setValue(value);
        setLastStates([...lastStates,Object.entries(value)
            .filter(entry=>!ignored.includes(entry[0]))
            .reduce((ret,stat)=>{ret[stat[0]]=stat[1]; return ret},{ts: new Date().getTime()})]
            .filter((_val,idx,arr) => arr.length >= maxSamples ? idx > arr.length - maxSamples : true));
    });

    return <Box className={classes.root}>
        <Box className={classes.header}>
            <Typography variant="h7">{name} {headerField && value[headerField] !== undefined && (`${headerField}: ${value[headerField]}`)}</Typography>
            <List className={classes.stats}>
                {Object.entries(value)
                        .filter(entry=>!ignored.includes(entry[0]))
                        .map(entry=>
                    <ListItem className={classes.stats} key={entry[0]}>
                        <Typography variant="littleHeader">{entry[0]}</Typography>:
                        <Typography variant="littleValue" >{entry[1] !== undefined && !Number.isInteger(entry[1]) ? entry[1].toFixed(2) : entry[1]}</Typography>
                    </ListItem>)}
            </List>
        </Box>
        <AreaChart 
                data={lastStates}
                height={300}
                width={500}
                className="chart"
                stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="ts"
                       name='Time'
                       color='black'
                       tickFormatter={unixTime => new Date(unixTime).toLocaleTimeString()}></XAxis>
                <YAxis hide={true}></YAxis>
                <Tooltip content={data => getStatTooltip(data, classes)}
                         labelFormatter={t => new Date(t).toLocaleString()}></Tooltip>
                {Object.keys(value).map((line,idx,arr) => <Area
                                    key={line}
                                    isAnimationActive={statsAnimateChange}
                                    type="monotone"
                                    fill={rainbow(arr.length,idx)}
                                    dataKey={line}
                                    stackId="1"></Area>)}
        </AreaChart>
    </Box>
});
    var statsCallbacks = {};

const StatsPanel = withStyles(statsStyle)(props => {
    const { classes, siteConfig } = props;
    const { statsRefreshRate, statsAnimateChange, maxSamples } = siteConfig;
    const [ statistics, setStatistics] = React.useState(undefined);
    const [ timer, setTimer ] = React.useState(undefined);
    const [ refreshRate, setRefreshRate ] = React.useState(statsRefreshRate);

    const registerStatCallback = (name,callback) => statsCallbacks = {...statsCallbacks,[name]:callback};
    const getStats = () => {
        return fetch(`${httpPrefix !== undefined ? httpPrefix : ""}/getStatistics`)
            .then(resp => resp.json())
            .then(stats => {return {
                FPS:{
                    LED:stats.LED_FPS,
                    SERIAL:stats.SERIAL_FPS,
                    AUDIO:stats.AUDIO_FPS
                },
                HEAP:{
                    USED:stats.HEAP_SIZE-stats.HEAP_FREE,
                    FREE:stats.HEAP_FREE,
                    MIN:stats.HEAP_MIN
                },
                DMA: {
                    USED: stats.DMA_SIZE - stats.DMA_FREE,
                    FREE: stats.DMA_FREE,
                    MIN: stats.DMA_MIN
                },
                PSRAM: {
                    USED: stats.PSRAM_SIZE - stats.PSRAM_FREE,
                    FREE: stats.PSRAM_FREE,
                    MIN: stats.PSRAM_MIN
                },
                CHIP: {
                    MODEL: stats.CHIP_MODEL,
                    CORES: stats.CHIP_CORES,
                    SPEED: stats.CHIP_SPEED,
                    PROG_SIZE: stats.PROG_SIZE
                },
                CODE: {
                    SIZE: stats.CODE_SIZE,
                    FREE: stats.CODE_FREE,
                    FLASH_SIZE: stats.FLASH_SIZE,
                },
                CPU: {
                    CORE0: stats.CPU_USED_CORE0,
                    CORE1: stats.CPU_USED_CORE1,
                    IDLE: ((200.0 - stats.CPU_USED_CORE0 - stats.CPU_USED_CORE1)/200)*100.0,
                }
            }});
    }    

    if (statistics && (!timer || (refreshRate.value !== statsRefreshRate.value))) {
        if (timer) {
            clearInterval(timer);
        }
        setRefreshRate(statsRefreshRate);

        setTimer(setInterval(() => getStats().then(stats => Object.entries(statistics).forEach(stat => statsCallbacks[stat[0]](stats[stat[0]]))),statsRefreshRate.value*1000));
    }

    !statistics && getStats().then(stats => {
        const updatedStats = {
            FPS:stats.FPS, 
            HEAP:stats.HEAP,
            DMA: stats.DMA,
            PSRAM: stats.PSRAM,
            CPU: stats.CPU
        };
        setStatistics(updatedStats);
        setTimer(setInterval(() => getStats().then(stats => Object.entries(updatedStats).forEach(stat => statsCallbacks[stat[0]](stats[stat[0]]))),statsRefreshRate.value*1000));
    });

    const getIgnored = (name) => {
        if ((name === "DMA") ||
            (name === "PSRAM") || 
            (name === "HEAP")) {
            return ["MIN"];
        }
        return [];
    };

    const getHeaderField = (name) => {
        if ((name === "DMA") ||
            (name === "DPSRAM") || 
            (name === "HEAP")) {
            return "MIN";
        }
    };

    return statistics && <Box className={classes.root}>
        {Object.entries(statistics)
            .map(entry=><AreaStat
                    key={entry[0]}
                    name={entry[0]}
                    registerStatCallback={registerStatCallback}
                    rawvalue={entry[1]}
                    statsAnimateChange={ statsAnimateChange.value }
                    maxSamples={ maxSamples.value }
                    headerField={getHeaderField(entry[0])}
                    ignored={getIgnored(entry[0])}/>)}
    </Box>
});

ReactDOM.createRoot(document.getElementById("root"))
        .render(<MainApp/>);
