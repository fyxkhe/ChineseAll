for(var i = 0; i < 36; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u16'] = 'center';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u3'] = 'center';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u19'] = 'center';u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u22'] = 'center';document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', u31Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u31LinksClick'></div>")
var u31LinksClick = document.getElementById('u31LinksClick');
function u31Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku2ee65534c640447baff232e861fb5ffb(event)'>用例 1</div>");
function u31Clicku2ee65534c640447baff232e861fb5ffb(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('创作.html');

	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku07e0f1665704473dba4ea7e931fc65cf(event)'>用例 2</div>");
function u31Clicku07e0f1665704473dba4ea7e931fc65cf(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('新建文章.html');

	ToggleLinks(e, 'u31LinksClick');
}
