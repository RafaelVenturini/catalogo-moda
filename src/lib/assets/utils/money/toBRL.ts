export function toBRL(value: number | string) {
	if (!value) return value;
	return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
