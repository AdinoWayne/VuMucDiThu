function interpret(command: string): string {
	let replacer = (match) => {
        if(match === '()') return 'o';
        else if(match === '(al)') return 'al';
		else return match;
	};
	return command.replace(/G|\(\)|\(al\)/g, replacer);
};
