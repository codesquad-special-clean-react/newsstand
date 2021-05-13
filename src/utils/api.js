async function request(method, url, body, headers) {
  const response = await fetch(url, { method, body, headers });
  const { status } = response;
  try {
    switch (status) {
      case 200:
        return await response.json();
      case 201:
        return await response.json();
      case 203:
        return await response.json();
      case 204:
        return await response.json();
      case 304:
        return await response.json();
      default:
        throw new Error(response.status);
    }
  } catch (e) {
    console.error(e);
    alert.open('데이터를 가져올 수 없습니다.');
  }
}

async function getRequest(url) {
  return await request('get', url);
}

async function requestNewData () {
    const url = '/newsdata.json';
    return await getRequest(url);
}

export { requestNewData };