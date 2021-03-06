var plantProfile = angular.module('plantProfile', []);
plantProfile.controller('plantProfileController',['Plants', '$state','ProfileInfo', function(Plants, $state, ProfileInfo){
  var that = this;
    that.data = {};
    that.data.nickname = $state.params.nickname;

    that.getPlant = function(){
      Plants.getPlant(that.data)
        .then(function(results) {
          // console.log(results);
          that.data.id =results.data.idOfSpecies;
          that.data.plantDate =results.data.plantDate;
          that.data.plantStatus = results.data.plantStatus;
          that.getSpecieInfoOfPlant();
        })
        .catch(function(error) {
          console.log(error)
        })
    };

    that.getSpecieInfoOfPlant = function(){
      Plants.getSpecieById(that.data)
        .then(function(results) {
          // console.log(results);
          that.data.botanicalName = results.data.botanicalName;
          that.data.careGuide = results.data.careGuide;
          that.data.commonName = results.data.commonName;
          that.data.exposure = results.data.exposure;
          that.data.generalPlantInfo = results.data.generalInformation;
          that.data.plantPic = results.data.plantPic;
          that.data.wateringInformation = results.data.wateringInformation;
          that.data.typeOf = results.data.typeOf;
        })
        .catch(function(error) {
          console.log(error);
        })
    };

    //immediately called when controller is loaded
    that.getPlant();
}]);
