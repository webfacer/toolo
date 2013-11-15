var toolo = angular.module('toolo', [])
.controller('Toolo', function(){
    //this.
})
.directive('wfToolo',['$compile', '$log', function($compile, $log){
    return {
        restrict : 'A',
		link : function(scope, element, attrs, parentFunction){
		    if(attrs.title) {
		        var tooltipArea = angular.element(element[0]);

		        element
		        .on('mouseover', function() {
		            var text = attrs.title;
		            var el = $compile('<span class="tip right">' + text + '</span>')(scope);
		            tooltipArea.append(el);
		        })
                .on('mouseout', function() {
                    tooltipArea[0].lastChild.remove();
                });
            }
            else {
                $log.info(' Info (No \'title\' attribute is set):  You might forgot to add a `title` text! In order to use toolo you must use e.g. `title="Hello World!"` in the same directive you want a tooltip to appear.');
            }
		}
    };
}]);
