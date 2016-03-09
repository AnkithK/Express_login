import requests

data = {"User ID:":"ak@gmail.com","Password:":"12345"}
resp = requests.post('http://localhost:3000',params=data)
print(resp)

