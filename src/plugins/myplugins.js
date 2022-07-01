let myplugins = {};
myplugins.install = function (Vue, options) {
    //console.log(Vue, options, '@')
    Vue.directive(options.name, (a, b) => {
        // console.log(a, b)
        a.innerHTML = b.value.toUpperCase()
    })
}
export default myplugins