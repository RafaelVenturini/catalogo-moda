export function toBRL(value: number) {
	if (!value) return value;
	return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
