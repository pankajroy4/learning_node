function extractWebsiteName(url) {
  if (url.startsWith("http://")) {
    url = url.slice(7);
  } else if (url.startsWith("https://")) {
    url = url.slice(8);
  }

  if (url.startsWith("www.")) {
    url = url.slice(4);
  }

  let domainName = url.split(".")[0];

  return domainName;
}

console.log(extractWebsiteName("https://www.amazon.in"));
console.log(extractWebsiteName("http://www.amazon.in"));
console.log(extractWebsiteName("www.amazon.in"));
console.log(extractWebsiteName("amazon.in"));
