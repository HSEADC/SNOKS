import Airtable from 'airtable'


export default new Promise((resolve) => {
  setTimeout(()=>{
   // class AsyncClass {
    //  constructor() {
    //    this.content = content;
   //   }
   // }
   class AsyncClass {
    constructor() {
      getPostTeasers().then((data) => {
        this.content = data
        update(this.content)
        //console.log(this.content)
      })

    }

    getVariable() {
      return this.content;
  }
   }
    resolve(AsyncClass);
  }, 1000);
});

//   patx3dbR2FVVqn9RA.25121240e61d45ff2ed53ad58f7b5ba5c21f4432a938bd7755c9251ce35840fb


function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    const token = 'patx3dbR2FVVqn9RA.25121240e61d45ff2ed53ad58f7b5ba5c21f4432a938bd7755c9251ce35840fb'

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: token
    })


    let base = Airtable.base('appzDLcXrJIhy2Qzn')

  

    base('articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            num: record.fields['num'],
            title: record.fields['title'],
            time: record.fields['time'],
            type: record.fields['type'],
            img: record.fields['img'],
            description: record.fields['description'],
            tag: record.fields['tag'],
            bannerImg: record.fields['bannerImg'],
            bannerTitle: record.fields['bannerTitle'],
          })
        })
        console.log(content)

        resolve(content)
      })
  })
}

function update(content) {
  const href = window.location.href.split('/').pop().split('.')[0]
  console.log(href)

  setTimeout(() => {
    content.forEach((stroke) => {
      if (href === stroke.page) {
        createContent(stroke)
      }
    }, 200)
  })
}
