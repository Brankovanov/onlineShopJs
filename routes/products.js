module.exports = function routeIndex(req, res) {
    res.render('products/products', {
        // Template data
        title: 'Products',
    });
};