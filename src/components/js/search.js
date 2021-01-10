export default {
    data () {
      return {
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        showSearch: false,
        headers: [
          {
            text: '社員ID',
            align: 'start',
            sortable: false,
            value: 'employee_id',
          },
          { text: '名前', value: 'name' },
          { text: 'フリガナ', value: 'frigana' },
          { text: '入社年月日', value: 'entering_date' },
          { text: '資格', value: 'certification_name' },
          { text: '取得日付', value: 'get_date' },
          { text: '奨励金日付', value: 'encourage_date' },
          { text: '', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
      }
    },
    created () {
        this.initialize()
      },
    methods:{
        initialize () {
            let _this = this;
            _this.$http.get('/search',{
                params:{
                    kw:_this.keyword,
                    hot:'',
                    priceUp:'',
                    priceDown:''
                }
                }).then((res)=>{
                    _this.desserts = res.data;
                    console.log(_this.desserts);
                },(err)=>{
                    console.log(err);
                });
        },
        goSearch(event){
            let _this = this;
          
            _this.$http.get('/search',{
                params:{
                    kw:'',
                    hot:'',
                    priceUp:'',
                    priceDown:''
                }
                }).then((res)=>{
                    _this.desserts = res.data;
                    console.log(_this.desserts);
                },(err)=>{
                    console.log(err);
                });
              
            
             window.event? window.event.returnValue = false : event.preventDefault();
        },
        shwoSeachChange(){
            this.showSearch=!this.showSearch;
        },
        getbyHot(){
            let _this = this;
            if(_this.keyword == ''){
                alert('请输入商品名称');
            }else{
                _this.$http.get('/search',{
                    params:{
                        kw:_this.keyword,
                        hot:'hot',
                        priceUp:'',
                        priceDown:''
                    }
                    }).then((res)=>{
                        _this.mDatas = res.data;
                        console.log(_this.mDatas);
                    },(err)=>{
                        console.log(err);
                    });
                }
        },
        getByPriceUp(){
            let _this = this;
            if(_this.keyword == ''){
                alert('请输入商品名称');
            }else{
                _this.$http.get('/search',{
                    params:{
                        kw:_this.keyword,
                        hot:'hot',
                        priceUp:'priceUp',
                        priceDown:''
                    }
                    }).then((res)=>{
                        _this.mDatas = res.data;
                        console.log(_this.mDatas);
                    },(err)=>{
                        console.log(err);
                    });
                }
        },
        getByPriceDown(){
            let _this = this;
            if(_this.keyword == ''){
                alert('请输入商品名称');
            }else{
                _this.$http.get('/search',{
                    params:{
                        kw:_this.keyword,
                        hot:'hot',
                        priceUp:'',
                        priceDown:'priceDown'
                    }
                    }).then((res)=>{
                        _this.mDatas = res.data;
                        console.log(_this.mDatas);
                    },(err)=>{
                        console.log(err);
                    });
                }
        }
    }
  }