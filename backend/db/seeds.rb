def create_user(opts)
  login = opts[:login]
  User.find_or_create_by(login: login) do |u|
    password = "#{login}ARVUT2014"
    u.password = password
    u.password_confirmation = password
    u.title = opts[:title]
    u.channel = opts[:channel] || :hidden
    u.email = opts[:email] || "#{login}@kbb1.com"
    u.role = opts[:role] || :user
    u.save!
  end
end

puts '--> Admins'
[{email: 'iwuvjhdva@gmail.com', login: 'negus', title: 'Konstantin Alexandrov'},
 {email: 'kolmanv@gmail.com', login: 'kolmanv', title: 'Kolman Vornovitsky'},
 {email: 'edoshor@gmail.com', login: 'edos', title: 'Edo Shor'},
 {email: 'yosef.yudilevich@gmail.com', login: 'yosefy', title: 'Yosef Yudilevich'},
 {email: 'amnonbb@gmail.com', login: 'amnon', title: 'Amnon Israeli'},
].each {|x| create_user x.merge(role: :admin, channel: :hidden)}

puts '--> Shidur operators'
create_user login: 'shidur', role: :operator, title: 'Shidur', channel: :hidden

puts '--> E2E Test user'
create_user login: 'e2e', role: :operator, title: 'e2e', channel: :large1

puts '--> Users'
%w(
kaliningrad|Kaliningrad|large1
kiev|Kiev|large1
vilnius|Vilnius|large1
odessa|Odessa|large1
newyork|New\ York|large1
toronto|Toronto|large1
guadalajara|Guadalajara|large1
santiago|Santiago|large1
monterrey|Monterrey|large1
novosibirsk|Novosibirsk|large1
dnepropetrovsk|Dnepropetrovsk|large2
krasnoyarsk|Krasnoyarsk|large2
piter|St.\ Petersburg|large2
krasnodar|Krasnodar|large2
tbilisi|Tbilisi|large2
rome|Rome|large2
milan|Milan|large2
tallinn|Tallinn|large2
riga|Riga|large2
orlando|Orlando|large2
nuremberg|Nuremberg|large2
afula|Afula|large1
arad|Arad|large1
arava|Arava|small1
ashdod|Ashdod|small1
ashkelon|Ashkelon|small1
beer-sheva|Beer\ Sheva|small1
eilat|Eilat|small1
eilat1|Eilat1|small1
galilgolan|Galil\ Golan|small2
hadera|Hadera|small2
haifa|Haifa|small2
jerusalem|Jerusalem|small2
karmiel|Karmiel|small2
kfar-saba|Kfar\ Saba|small2
kiriat-gat|Kiriat\ Gat|small2
mizpe|Mizpe\ Ramon|small1
moscow|Test|small1
naharia|Naharia|small1
nazareth|Nazareth\ Illit|small1
netania|Netanya|small1
nizana|Pithat\ Nitzana|small1
raanana|Raanana|small2
rehovot|Rehovot|small2
revadim|Revadim|small2
rishon|Rishon\ Lezion|small2
shidur|Shidur|small2
tel-aviv|Tel\ Aviv|small2
tveria|Tveria|small2
yokneam|Yokneam|small2
zichron|Zichron|small2).each {|x|
    login, title, channel = x.split('|')
    create_user(login: login, title: title, channel: channel.to_sym)
}

puts '--> Shidur State'
ShidurState.find_or_create_by(id: 1) do |s|
  s.state = {}
  s.save!
end

puts '--> Done'
