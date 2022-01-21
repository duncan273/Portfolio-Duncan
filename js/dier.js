const animal = prompt ("vul een dier in")

if(animal.toLowerCase() === "kikker"){
    document.body.innerHTML += "De kikker kwaakt";
}

else if(animal.toLowerCase() === "paard"){
    document.body.innerHTML += "Het paard hinnikt";
}

else if(animal.toLowerCase() === "koe"){
    document.body.innerHTML += "De koe loeit";
}

else if(animal.toLowerCase() === "leeuw"){
    document.body.innerHTML += "De leeuw brult";
}

else if(animal.toLowerCase() === "slang"){
    document.body.innerHTML += "De slang slist";
}

else if(animal.toLowerCase() === "goudvis"){  
    document.body.innerHTML += "De goudvis blubt";
}

else{
    document.body.innerHTML += "Het dier bestaat niet"
}

Kikker (kwaakt)
Paard (hinnikt)
Koe (loeit)
Leeuw (brult)
Slang (slist)
Goudvis (blubt)