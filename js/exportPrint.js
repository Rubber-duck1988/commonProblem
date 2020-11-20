function onPrint(tableId,wid1,wid2){
			if(tableId=='dcg_printlist'){
				$("#" + tableId).show();
				$( '.underline').css({'border': '0','border-bottom':'1px solid #000000','width':'100px','text-align':'center','background':'#fff'});
				$( '.underline3').css({'border': '0','border-bottom':'1px solid #000000','width':'50px','text-align':'center','background':'#fff'});
				$( '.underLine4').css({'border-bottom':'2px dashed #ccc','width':'100%',height:'1px',margin:'10px 0'});
				$( '.imgBg1').css({'width': '150px',height:' 150px',position: 'absolute',right: '6.5%',bottom: '0'});
				$('.aaa').css("width",wid1+"px");
				$('.bbb').css("width",wid2+"px");
				$('.clear').css("clear","both");
				$('.eq').css({'height':'48%'});
				$( "#" + tableId +' table').css({'table-layout': 'fixed',margin:'auto','text-align': 'center','border-collapse': 'collapse'});
				$("#" + tableId).jqprint();
				// $("#" + tableId).empty();
				$("#" + tableId).hide();
			}else {
				$("#" + tableId).show();
				$( '.underline').css({'border': '0','border-bottom':'1px solid #000000','width':'100px','text-align':'center','background':'#fff'});
				$( '.underline3').css({'border': '0','border-bottom':'1px solid #000000','width':'50px','text-align':'center','background':'#fff'});
				$( '.underLine4').css({'border-bottom':'2px dashed #ccc','width':'100%',height:'1px',margin:'18px 0'});
				$( '.imgBg1').css({'width': '150px',height:' 150px',position: 'absolute',right: '6.5%',bottom: '0'});
				$('.aaa').css("width",wid1+"px");
				$('.bbb').css("width",wid2+"px");
				$( "#" + tableId +' table').css({'table-layout': 'fixed',margin:'auto','text-align': 'center','border-collapse': 'collapse'});
				$("#" + tableId).jqprint();
				// $("#" + tableId).empty();
				$("#" + tableId).hide();
			}

		}
function onPrintBatch(tableId,wid1,wid2){
	if(tableId=='dcg_printlist'){
		$("#" + tableId).show();
		$( '.underline').css({'border': '0','border-bottom':'1px solid #000000','width':'100px','text-align':'center','background':'#fff'});
		$( '.underline3').css({'border': '0','border-bottom':'1px solid #000000','width':'50px','text-align':'center','background':'#fff'});
		$( '.underLine4').css({'border-bottom':'2px dashed #ccc','width':'100%',height:'1px',margin:'15px 0'});
		$( '.imgBg1').css({'width': '150px',height:' 150px',position: 'absolute',right: '6.5%',bottom: '0'});
		$('.aaa').css("width",wid1+"px");
		$('.bbb').css("width",wid2+"px");
		$('.clear').css("clear","both");
		$('.eq').css({'height':'48%'});
		$( "#" + tableId +' table').css({'table-layout': 'fixed',margin:'auto','text-align': 'center','border-collapse': 'collapse'});
		$("#" + tableId).jqprint();
		$("#" + tableId).empty();
		$("#" + tableId).hide();
	}else {
		$("#" + tableId).show();
		$( '.underline').css({'border': '0','border-bottom':'1px solid #000000','width':'100px','text-align':'center','background':'#fff'});
		$( '.underline3').css({'border': '0','border-bottom':'1px solid #000000','width':'50px','text-align':'center','background':'#fff'});
		$( '.underLine4').css({'border-bottom':'2px dashed #ccc','width':'100%',height:'1px',margin:'18px 0'});
		$( '.imgBg1').css({'width': '150px',height:' 150px',position: 'absolute',right: '6.5%',bottom: '0'});
		$('.aaa').css("width",wid1+"px");
		$('.bbb').css("width",wid2+"px");
		$( "#" + tableId +' table').css({'table-layout': 'fixed',margin:'auto','text-align': 'center','border-collapse': 'collapse'});
		$("#" + tableId).jqprint();
		$("#" + tableId).empty();
		$("#" + tableId).hide();
	}

}
function onPrintLetter(tableId,wid1){

		$("#" + tableId).show();
		$( '.underline1').css({'border': '0','border-bottom':'1px solid #000000','width':'120px','text-align':'center','background':'#fff'});
		$( '.underline2').css({'border': '0','border-bottom':'1px solid #000000','width':'300px','text-align':'center','background':'#fff'});
		$( '.underline3').css({'border': '0','border-bottom':'1px solid #000000','width':'250px','text-align':'center','background':'#fff'});
		$('.aaa').css("width",wid1+"px");
		$('.clear').css("clear","both");
		$('.eq').css({'height':'48%'});
		$( "#" + tableId +' table').css({'table-layout': 'fixed',margin:'auto','text-align': 'center','border-collapse': 'collapse'});
		$("#" + tableId).jqprint();
		$("#" + tableId).hide();

}

		var idTmr;
		function getExplorer() {
			var explorer = window.navigator.userAgent;
			//ie  
			if (explorer.indexOf("MSIE") >= 0) {
				return 'ie';
			}
			//firefox  
			else if (explorer.indexOf("Firefox") >= 0) {
				return 'Firefox';
			}
			//Chrome  
			else if (explorer.indexOf("Chrome") >= 0) {
				return 'Chrome';
			}
			//Opera  
			else if (explorer.indexOf("Opera") >= 0) {
				return 'Opera';
			}
			//Safari  
			else if (explorer.indexOf("Safari") >= 0) {
				return 'Safari';
			}
		}

		function exportToExcel(tableid) {
			if (getExplorer() == 'ie') {
				var curTbl = document.getElementById(tableid);
				var oXL = new ActiveXObject("Excel.Application");
				var oWB = oXL.Workbooks.Add();
				var xlsheet = oWB.Worksheets(1);
				var sel = document.body.createTextRange();
				sel.moveToElementText(curTbl);
				sel.select();
				sel.execCommand("Copy");
				xlsheet.Paste();
				oXL.Visible = true;

				try {
					var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
							"Excel Spreadsheets (*.xls), *.xls");
				} catch (e) {
					print("Nested catch caught " + e);
				} finally {
					oWB.SaveAs(fname);
					oWB.Close(savechanges = false);
					oXL.Quit();
					oXL = null;
					idTmr = window.setInterval("Cleanup();", 1);
				}

			} else {
				tableToExcel(tableid)
			}
		}
		function Cleanup() {
			window.clearInterval(idTmr);
			CollectGarbage();
		}
		var tableToExcel = (function() {
			var uri = 'data:application/vnd.ms-excel;base64,', template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>', base64 = function(
					s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			}, format = function(s, c) {
				return s.replace(/{(\w+)}/g, function(m, p) {
					return c[p];
				})
			}
			return function(table, name) {
				if (!table.nodeType)
					table = document.getElementById(table)
				var ctx = {
					worksheet : name || 'Worksheet',
					table : table.innerHTML
				}
				window.location.href = uri + base64(format(template, ctx))
			}
		})()
