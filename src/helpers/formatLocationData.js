const formaLocationData = data => ({
  ...data,
  totalPopulation: data.malePopulation + data.femalePopulation,
  sublocations: !data.sublocations ? null : data.sublocations.map(sublocation => ({
    ...sublocation,
    totalPopulation: sublocation.malePopulation + sublocation.femalePopulation,
  })),
});

export default formaLocationData;
