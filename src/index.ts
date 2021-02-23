const { random } = Math;

interface RangeOptions {
	start: number;
	stop: number;
	step: number;
	infinite: boolean;
}

function createRangeOptions(startOrStop: number, stop?: number, step?: number): RangeOptions {

	if (stop === undefined) {
		stop = startOrStop;
		startOrStop = 0;
	}

	if (step === undefined) step = 1;

	return {
		start: startOrStop,
		stop: stop,
		step: step,
		infinite:
			(startOrStop < stop && step < 0) ||
			(startOrStop > stop && step > 0),
	};

}

/**
 * 指定した範囲の値を含む値を含むシーケンスを作成します。
 * @param stop シーケンスの終了値。この値は含まれません。
 */
export function range(stop: number): number[];

/**
 * 指定した範囲の値を含む値を含むシーケンスを作成します。
 * @param start シーケンスの開始値。
 * @param stop シーケンスの終了値。この値は含まれません。
 * @param step シーケンス各値の差。
 */
export function range(start: number, stop: number, step?: number): number[];

export function range(startOrStop: number, stop?: number, step?: number): number[] {

	const {
		start: a,
		stop: b,
		step: s,
		infinite: e,
	} = createRangeOptions(startOrStop, stop, step);

	if (e) throw new RangeError("specified range is infinite");

	const r: number[] = [];
	if (s > 0) {
		for (let i = a; i < b; i += s) {
			r.push(i);
		}
	} else {
		for (let i = a; i > b; i += s) {
			r.push(i);
		}
	}
	return r;

}

/**
 * 指定した範囲の値を含む値を含むシーケンスジェネレータを作成します。
 * @param stop シーケンスの終了値。この値は含まれません。
 */
export function xrange(stop: number): Generator<number>;

/**
 * 指定した範囲の値を含む値を含むシーケンスジェネレータを作成します。
 * @param start シーケンスの開始値。
 * @param stop シーケンスの終了値。この値は含まれません。
 * @param step シーケンス各値の差。
 */
export function xrange(start: number, stop: number, step?: number): Generator<number>;

export function* xrange(startOrStop: number, stop?: number, step?: number) {

	const {
		start: a,
		stop: b,
		step: s,
	} = createRangeOptions(startOrStop, stop, step);

	if (s > 0) {
		for (let i = a; i < b; i += s) yield i;
	} else {
		for (let i = a; i > b; i += s) yield i;
	}

}

/**
 * 配列をシャッフルします。
 * @param array シャッフルする配列。
 */
export function shuffle<T>(array: T[]): T[] {

	array = [...array];
	for (let i = 0; i < array.length; ++i) {
		const j = ~~(random() * array.length);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
	
}
