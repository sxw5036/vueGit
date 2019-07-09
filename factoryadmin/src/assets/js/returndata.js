
function returndata (obj, resData) {
							let errors = resData.error;
							let errorsInfo = '';
							let formProperty;
							_.forEach(errors, function(value, key) {
								if (errorsInfo != '') {
									errorsInfo += '<br>';
								}
								formProperty = obj[key];
								if (formProperty === 'undefined') {
									console.error('表单属性 ' + key + ' 没有在 formPropertyMapping 中定义')
								} else {
									errorsInfo += obj[key] + value;
								}
							});
							return errorsInfo;
						}
	export default returndata;
