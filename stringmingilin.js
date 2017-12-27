function stringMingling(p,q){
    if(p.lenth === 0) return

    return p.substr(0,1) + q.substr(0,1) + stringMingling(p.substr(1,p.lenth),q.substr(1,q.lenth))

}

console.log(stringMingling("cat", "dog"))