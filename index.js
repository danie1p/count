const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");
const btnCount1Increase1 = document.querySelector("#count1-btn-increase1");
const btnCount1Increase2 = document.querySelector("#count1-btn-increase2");
const btnCount1Increase3 = document.querySelector("#count1-btn-increase3");
const btnCount2Increase1 = document.querySelector("#count2-btn-increase1");
const btnCount2Increase2 = document.querySelector("#count2-btn-increase2");
const btnCount2Increase3 = document.querySelector("#count2-btn-increase3");
const btnReset = document.querySelector("#reset");

btnCount1Increase1.addEventListener("click", () => {
            
        let value = parseInt(count1.textContent);
        value++;
        count1.textContent = value;
        
    }
)
btnCount2Increase1.addEventListener("click", () => {
            
        let value = parseInt(count2.textContent);
        value++;
        count2.textContent = value;
        
    }
)
btnCount1Increase2.addEventListener("click", () => {
            
        let value = parseInt(count1.textContent);
        value += 2;
        count1.textContent = value;
        
    }
)

btnCount2Increase2.addEventListener("click", () => {
            
        let value = parseInt(count2.textContent);
        value += 2;
        count2.textContent = value;
        
    }
)

btnCount1Increase3.addEventListener("click", () => {
            
        let value = parseInt(count1.textContent);
        value += 3;
        count1.textContent = value;
        
    }
)

btnCount2Increase3.addEventListener("click", () => {
            
        let value = parseInt(count2.textContent);
        value += 3;
        count2.textContent = value;
        
    }
)

btnReset.addEventListener("click", ()=> {
    
    count1.textContent = "0";
    count2.textContent = "0";
    
});

