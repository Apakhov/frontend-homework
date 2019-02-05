'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([1]), [1]);
		assert.deepEqual(inverse(['a']), ['a']);
		assert.deepEqual(inverse([null]), [null]);
		assert.deepEqual(inverse([false]), [false]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
		assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
	});

	QUnit.test('Функция работает на больших данных', function (assert) {
		assert.deepEqual(inverse(createBigArray(0, 1000000)), createBigArray(0, 1000000).reverse())
		assert.deepEqual(inverse(createBigArray(0, 1000000), 50000), createBigArray(0, 50000).concat(createBigArray(50000, 1000000).reverse()))
		assert.deepEqual(inverse(createBigArray(0, 1000000), -50000), createBigArray(0, 1000000 - 50000).reverse().concat(createBigArray(1000000 - 50000, 1000000)))
	})
});