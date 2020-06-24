const getData = (URL) => {
  return fetch(URL).then(res => res.json()).then(res => res).catch(error => error);
};

export default getData;
