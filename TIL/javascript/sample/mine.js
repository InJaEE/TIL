var tbody = document.querySelector('#table tbody');
var dataset = []; // 지뢰 정보를 따로 저장할 배열

document.querySelector("#exec").addEventListener('click',function(){
    tbody.innerHTML = '';
    dataset = [];
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine =parseInt(document.querySelector('#mine').value);
    // console.log(hor, ver, mine);

    var 후보군 = Array(hor*ver).fill()
        .map(function(element, index){
            return index;
        });
    var shuffle = [];
    while(후보군.length>hor*ver-mine){
        var 이동값 = 후보군.splice(Math.floor(Math.random()*후보군.length), 1)[0];
        shuffle.push(이동값);
    }
    // console.log(shuffle);
    

    // 지뢰 테이블 만들기
    
    for(var i=0;i<ver;i++){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j=0;j<hor;j++){
            var td = document.createElement('td');

            td.addEventListener('contextmenu', function(e){
                e.preventDefault(); // 원래있던 이벤트를 중지시킨다.
                // console.log("오른쪽 클릭");

                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;

                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                
                // console.log(부모tr, 부모tbody, e.currentTarget, 칸, 줄);
                // console.log(e.currentTarget.textcontent);
                console.log("!", dataset);
                

                if(e.currentTarget.textContent === '' || e.currentTarget.textContent ==='X'){
                    e.currentTarget.textContent = '!';
                    console.log("!");
                } else if(e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                    console.log("?");
                    
                } else if(e.currentTarget.textContent === '?'){
                    console.log("타냐?");
                    console.log("데이터셋", dataset[줄][칸]);
                    
                    if(dataset[줄][칸] === undefined){
                        e.currentTarget.textContent = '';
                    } else if(dataset[줄][칸] === 'X'){
                        console.log("타냐!!!");
                        e.currentTarget.textContent = 'X';
                    }
                }
            })

            td.addEventListener('click', function(e){
                // 클릭했을때 주변 지뢰 개수
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;

                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if(dataset[줄][칸]==='X'){
                    e.currentTarget.textContent = '펑!';
                } else{

                    var 주변 = [ dataset[줄][칸-1], dataset[줄][칸+1] ];
                    if(dataset[줄-1]){
                        주변 = 주변.concat(dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]);
                    };
                    if(dataset[줄+1]){
                        주변 = 주변.concat(dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]);
                    };

                    

                    e.currentTarget.textContent = 주변.filter(function(v){
                        return v === 'X';
                    }).length;

                }
            })

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    // 지뢰 심기
    for(var k=0;k<shuffle.length;k++){
        var 세로 = Math.floor(shuffle[k]/10);
        var 가로 = shuffle[k]%10;
        // console.log("shuffle", shuffle[k]);
        
        // console.log("세로, 가로",세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';
    }
    // console.log(dataset);
    
});
