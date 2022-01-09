/**
 * 选择排序
 * 从数组里找最小进行排序
 *
 * @param arr
 * @returns {*}
 */

function selectionSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  // 0 ~ N-1  找到最小值，在哪，放到0位置上
  // 1 ~ n-1  找到最小值，在哪，放到1 位置上
  // 2 ~ n-1  找到最小值，在哪，放到2 位置上
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) { // i ~ N-1 上找最小值的下标
      minIndex = arr[j] < arr[minIndex] ? j : minIndex; // 寻找到最小值，并保存
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
const test = generateRandomArray(5);
jsLog('原始',test)
jsLog('转换',selectionSort(test))