## Backend (Rails) API 

This doc describes API between frontend (Angular) and backend (Rails).

# /users

GET /users/breakdown

```
{
  large1: [
    {login: "afula", title: "Afula"},
    {login: "arad", title: "Arad"},
  ],
  large2: [
    {login: "beer-sheva", title: "Beer Sheva"},
    {login: "eilat", title: "Eilat"},
  ],
  small1: [
    {login: "naharia", title: "Naharia"},
    {login: "nazareth", title: "Nazareth Illit"},
  ],
  small2: [
    {login: "raanana", title: "Raanana"},
    {login: "rehovot", title: "Rehovot"},
  ],
  control: [
    {login: "afula", title: "Afula"},
    {login: "arad", title: "Arad"},
    {login: "beer-sheva", title: "Beer Sheva"},
    {login: "eilat", title: "Eilat"},
  ]
}
```

# /janus

GET /janus/streams/afula/video
GET /janus/streams/afula/audio

```
{
  id: "Uh74Gts89"
}
```

PUT /janus/switch/large1/program/afula
PUT /janus/switch/large1/preview/afula

```
{}
```



