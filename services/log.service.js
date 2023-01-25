import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(` ERROR : ${error}`));
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(` SUCCESS : ${message}`));
};



const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
    Without parameters - weather output
    -s [CITY] for setting City
    -h for help outpur
    -t [API KEY] for saving token.
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellowBright("WEATHER")} Weather in ${res.name}
    ${icon} ${res.weather[0].description}
    Temp: ${res.main.temp}° (feels like ${res.main.feels_like}°)
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed} mph
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };