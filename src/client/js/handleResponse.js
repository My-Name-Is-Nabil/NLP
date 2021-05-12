function handleResponse(response){
    if (response.agreement){
        const agreement = response.agreement === 'AGREEMENT' ? 'in agreement' : 'not in agreement';
        const subjective = response.subjectivity === 'OBJECTIVE' ? 'objective' : 'not objective';
        const confidenceScore = response.confidence;
        const irony = response.irony === 'IRONIC' ? 'ironic' : 'not ironic';
        const innerHTML = `The different elements of the artice are ${agreement}<br>The article is ${subjective}<br>The article is ${irony}<br>The confidence score is ${confidenceScore}`;
        document.querySelector('.result__response').innerHTML = innerHTML;
        return innerHTML;
    }
    else if (response.summary){
        const innerHTML = `Summary: ${response.summary}`;
        document.querySelector('.result__response').innerHTML = innerHTML;
        return innerHTML;
    }
    else if(response.concept_list){
        let entityList = [];
        for(let i=0;i<response.entity_list.length;i++){
            entityList.push(response.entity_list[i].form);
        }
        entityList = entityList.join(', ');
        let conceptList = [];
        for(let i=0;i<response.concept_list.length;i++){
            conceptList.push(response.concept_list[i].form);
        }
        conceptList = conceptList.join(', ');
        const innerHTML = `Entity list: ${entityList}<br>Concept list: ${conceptList}`;
        document.querySelector('.result__response').innerHTML = innerHTML;
        return innerHTML;
    }
}

export { handleResponse };