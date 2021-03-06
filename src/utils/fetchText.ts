const fetchText = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  return text
}

export default fetchText