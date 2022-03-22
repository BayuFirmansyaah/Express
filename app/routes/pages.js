module.exports = function(app){

	app.route('/').get((req,res)=>{
		res.render('index',{
			title:'Home | StarCode',
			css : 'index'
		})
	})

	app.route('/produk').get((req,res)=>{
		res.render('produk',{
			title:'Produk | StarCode',
			css : 'produk'
		})
	})
}