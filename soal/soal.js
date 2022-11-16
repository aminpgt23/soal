    const dingdong =[]
    dingdong[0] = {
       nama:'monica',
       gender:'Female',
       age:17,
       email: 'monica@dingdong.com',
       favoriteColor:['yellow','pink','white','purple'],
       isHavePet:'yes',
       Education : [
        {
         name:'SD01',
         city:'jakarta',
         graduate:'2016',
       },{
          name:'smp02',
          city:'jakarta',
          graduate:'2019'
       },{
        name:'SMA 03',
        city:'Tanggerang',
       }
    ],
       favoriteRestourant:[
        'bento','sushi','panchake',
        'eggy','tempura','bento',
        'tteok','padang',
       ]
   };
  

  
   dingdong[1] = {
      nama:'wendy',
      gender:'male',
      age:23,
      email: 'wendy@dingdong.com',
      favoriteColor:['blue','black','grey'],
      isHavePet:'no',
      Education : [
       {
        name:'SD02',
        city:'jakarta',
        graduate:'2010',
      },{
         name:'smp03',
         city:'bogor',
         graduate:'2013'
      },{
       name:'SMA 01',
       city:'surabaya',
       graduate:'2016',
      },{
        name:'universitas maju',
        city:'Tanggerang',
      }
   ],
      favoriteRestourant:[
       'bento','tempora','panchake',
       'sushi','padang','katsu',
       'geprek','eggy',
      ]
  };
   

  console.log("nama : " + dingdong[1].nama);
  console.log("SMA : " + dingdong[1].Education[2].name);
  console.log("KOTA : " + dingdong[1].Education[2].city);
  console.log("Makanan  Favorite : " + dingdong[1].favoriteRestourant[5]);