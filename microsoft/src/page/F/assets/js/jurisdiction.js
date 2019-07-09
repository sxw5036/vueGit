window.Isjurisdiction = {
	"isjurisdiction": function(_this) {
		/* var cfg = window.lwxfPreload;
						
					if (!cfg) {
					
						_this.$Spin.show({
							render: (h) => {
								return h('div', '抱歉，你当前未登录')
							}
						});
		
						return false
		
					}  else if (cfg.nameType != 1) {
		
						console.log("抱歉，你没有权限访问")
		
						_this.$Spin.show({
							render: (h) => {
								return h('div','抱歉，你没有权限访问')
							}
						});
		
						return false
		
					} */
	},

	'isright': function(res, that, verify) {

		var keydata = []

		if(!!verify) {

			keydata = verify

		}

		var keydatacache = {}

		for(var i = 0; i < keydata.length; i++) {

			var obj = keydata[i].name

			if(!keydatacache[obj]) {
				keydatacache[obj] = keydata[i]
			}

		}

		if(res == false) {
			return false
		} else if(res.data.code && res.data.code == "20000") {

			var objjisobn = res.data.error
			var keyName = ""

			for(var key in objjisobn) {

				if(!!keydatacache[key]) {
					keyName = keydatacache[key].note

					that.mui.toast(keyName + objjisobn[key], {
						duration: 'long',
						type: 'div'
					})
				}

			}

			return false
		} else if(res.data.code && res.data.code != "200") {

			that.mui.toast(res.data.error, {
				duration: 'long',
				type: 'div'
			})
			return false
		} else {

			return true;
		}

	},

	'user_jurisdiction': function(keydata, operation) {
		var cfg = window.lwxfPreload

		if(cfg == "" || cfg == null) {
			return false;
		}

		var useroperations = cfg.preload.userMenu.userOperations

		if(!!keydata) {

			var keysdata = useroperations[keydata].split(',')

			/*console.log(keysdata)*/

			for(var i = 0; i < keysdata.length; i++) {
				operation[keysdata[i]] = true
			}
		}
	}

}