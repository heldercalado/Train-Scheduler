function newsFeed(argTarget){

this.api = "b8f5753cadf643e38cbf882659ae8aa2"
this.requestUrl = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/7.json?api-key="+this.api;
this.newsArray;
this.init();



}

newsFeed.prototype.init = function (){
this.getNewsFeed();

}
newsFeed.prototype.getNewsFeed = function (){
    var _this = this;

    $.ajax({
        url: this.requestUrl,
        method: 'GET',
      }).done(function(result) {
        //console.log(result);
        
       console.log("Request Status: "+ result.status);
       console.log(result.results.length)
       for (var i = 0 ; i < 10;i++){
       $("#targettxt").append(i+1 +". "+result.results[i].title+ " ");
    }
      }).fail(function(err) {
        throw err;
      });
    
}

newsFeed.prototype.loadArrayOfNews = function(){
    

}




