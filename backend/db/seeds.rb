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
arava|Arava|large1
ashdod|Ashdod|large1
ashkelon|Ashkelon|large1
beer-sheva|Beer\ Sheva|large1
eilat|Eilat|large1
eilat1|Eilat1|large1
galilgolan|Galil\ Golan|large2
hadera|Hadera|large2
haifa|Haifa|large2
jerusalem|Jerusalem|large2
karmiel|Karmiel|large2
kfar-saba|Kfar\ Saba|large2
kiriat-gat|Kiriat\ Gat|large2
mizpe|Mizpe\ Ramon|large1
moscow|Test|large1
naharia|Naharia|large1
nazareth|Nazareth\ Illit|large1
netania|Netanya|large1
nizana|Pithat\ Nitzana|large1
raanana|Raanana|large2
rehovot|Rehovot|large2
revadim|Revadim|large2
rishon|Rishon\ Lezion|large2
shidur|Shidur|large2
tel-aviv|Tel\ Aviv|large2
tveria|Tveria|large2
yokneam|Yokneam|large2
zichron|Zichron|large2).each {|x|
    login, title, channel = x.split('|')
    create_user(login: login, title: title, channel: channel.to_sym)
}

puts '--> Shidur State'
ShidurState.find_or_create_by(id: 1) do |s|
  s.state = {}
  s.save!
end

puts '--> Done'
