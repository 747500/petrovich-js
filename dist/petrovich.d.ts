export type PetrovichPerson = {
	first: string;
	middle?: string;
	last: string;
	gemder?: string;
};

export enum PetrovichCase {
	'nominative' = 'nominative', // - именительный (кто? что?)
	'genitive' = 'genitive', // - родительный (кого? чего?)
	'dative' = 'dative', //  - дательный (кому? чему?)
	'accusative' = 'accusative', //  - винительный (кого? что?)
	'ablative' = 'ablative', //  - творительный (кем? чем?)
	'prepositional' = 'prepositional', //  - предложный (о ком? о чем?)
};

export function petrovich(person: PetrovichPerson, case: PetrovichCase): PetrovichPerson;
