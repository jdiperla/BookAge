//This is an example gamebook file

var GameObjects = {
    'titlescreen': [
      ['RoomName', 'Title Screen'],
      ['RoomDesc', `Good afternoon. You have been selected to accomplish a mission. Pick your designation:<br><objdc vars="designation:007" id="design007" next="room2">James Bond 007</objdc><br><objdc id="designmax" vars="designation:Max" next="room2">Mad Max</objdc>`],
      ['XRes', '320'],
      ['YRes', '240'],
      ['RmImg', 'http://selmiak.bplaced.net/games/c64/zak/room/74_intro_00_256.png'],
      ['RmMov','']
      
    ],
    'room2': [
      ['RoomName', 'Title Screen'],
      ['RoomDesc', `It is a pleasure to meet you @-designation-@. You will begin your mission shortly. Please return to your office and try another designation.  Go back to the <objdc id="goTitle" next="titlescreen">office</objdc>.`],
      ['XRes', '320'],
      ['YRes', '240'],
      ['RmImg', 'http://selmiak.bplaced.net/games/c64/zak/room/74_intro_00_256.png'],
      ['RmMov', '']
      ]
}

