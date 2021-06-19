async function CovidApi() {
  const coviddata = await fetch("https://api.covid19api.com/summary");
  const CovidJsonData = await coviddata.json();
  const IndiaData = CovidJsonData.Countries.filter(
    (e) => e.CountryCode === "IN"
  );
  document.getElementById("totalConfirmCase").innerText = await IndiaData[0]
    .TotalConfirmed;
  document.getElementById("totalDeath").innerText = await IndiaData[0]
    .TotalDeaths;
  document.getElementById("TotalRecovered").innerText = await IndiaData[0]
    .TotalRecovered;
  document.getElementById("totalActiveCase").innerText =
    (await IndiaData[0].TotalConfirmed) -
    IndiaData[0].TotalRecovered -
    IndiaData[0].TotalDeaths;
  document.getElementById("newConfirm").innerText = await IndiaData[0]
    .NewConfirmed;
  document.getElementById("newDeath").innerText = await IndiaData[0].NewDeaths;
  document.getElementById("newRecover").innerText = await IndiaData[0]
    .NewRecovered;

  console.log(IndiaData);
}
CovidApi();
