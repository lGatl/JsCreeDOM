
var section = [];

var Section = function(arg) {
  var titre = arg.titre,
    textAcceuil = arg.textAcceuil,
    imageBackground= arg.imageBackground;
  return {
    titre: titre,
    textAcceuil: textAcceuil,
    imageBackground: imageBackground
  };

}


section.push(Section({
 titre: "Accueil",
  textAcceuil: "Je suis le titre de la section Acceuil",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}));

section.push(Section({
  titre: "Formation",
  textAcceuil: "Je suis le titre de la section Formation",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}));

section.push(Section({
  titre: "Travaux",
  textAcceuil: "Je suis le titre de la section Travaux",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}));

section.push(Section({
  titre: "Contact",
 textAcceuil: "Je suis le titre de la section Contact",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}));

  G("#root").elthtml({
	    tag:"div",
	    prop: [".menu"]
	  })



for (i=0;i<section.length;i++){
console.log(section)
	   var  titre = section[i].titre
	  var   textAcceuil = section[i].textAcceuil
	   var  imageBackground= section[i].imageBackground

	  G("#root").elthtml({
	      tag:"section",
	      prop: {
	      id: titre,
	      class: "section",
	      style: "background: url("+' " ' +imageBackground+' " ' +") "
	      }
	  })
	  G({id: titre}).elthtml({
	    tag:"h1",
	    contenu:  textAcceuil
	  })
	   G(".menu").elthtml({
	    tag:"a",
	    contenu:  titre,
	    prop: {
	    	href: "#"+ titre
	    }
	  })

}
