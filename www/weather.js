

Vue.createApp({
    data:function(){
        return{
            message:'s',
            pops:[],
            weather:'',
            o_list:'',
            wList:Array(40).fill({date:'',pop:'',icon:''}),
            label:[],
            show:false,
            settingShow:true,

        };
    },
    methods:{
        setupp(){
            console.log(this.wList);
            // this.message="aaa"
        },
        infoClick(){
            this.show=true
        },
        disInfoClick(){
            this.show=false
        },
        changeBlue(){
            console.log('AS')

        },
        settingClick(){

        }
    },
    mounted:function(){

       //this.message='aaaaaa'
        axios
        .get('https://api.openweathermap.org/data/2.5/forecast?q=Kusatsu&appid=ce6f72db8231471e58511577518ef762&lang=ja&units=metric')
        .then((response)=>{
            // handle success(axiosの処理が成功した場合に処理させたいことを記述
            this.o_list=response.data
            for (let i=0;i<40;i++){
                this.pops[i]=this.o_list.list[i].pop*100
                this.label[i]=this.o_list.list[i].dt_txt.slice(5,16)
                this.wList[i].icon=this.o_list.list[i].weather[0].icon
                //console.log(this.label[i].slice(6,8))
                if(this.label[i].slice(6,8)!="00"){
                    this.label[i]=this.label[i].slice(6,11)
                }
            }
             var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.label,
                datasets: [
                {
                    label: 'BKC 降水確立',
                    data: this.pops,
                    backgroundColor: '#ffffff35',
                    borderColor:'#ffffff93',
                    borderWidth:8,
                },
                ],
            },
          options: {
                responsive: false, //trueにすると画面の幅に合わせて作図してしまう
                maintainAspectRatio: false ,//これを追加
                display:false,
                animation: {
        duration: 1200, // 一般的なアニメーションの時間
    },
        },
        });

            
        }
        )
        .catch((error) => {
            // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
            //console.log('error');
            alert(error)
        })
        
    }

}).mount('#app');
