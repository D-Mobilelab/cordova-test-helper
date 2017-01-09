let simulateEvent = (eventName, attrs, time, target = 'document') => {
    let _target;
    if (target === 'window'){
        _target = window;
    } else {
        _target = document;
    }

    let event = new CustomEvent(eventName, { detail: {ts:Date.now(), ...attrs} });
    
    setTimeout(() => {
        _target.dispatchEvent(event);
    }, time || 1000);
}

export default simulateEvent;
