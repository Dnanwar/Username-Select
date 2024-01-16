class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  searchPrefix(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return null;
      }
    }

    return node;
  }

  getAllWordsWithPrefix(prefix) {
    const result = [];
    const node = this.searchPrefix(prefix);

    const dfs = (currentNode, currentPrefix) => {
      if (!currentNode) return;

      if (currentNode.isEndOfWord) {
        result.push(currentPrefix);
      }

      for (const char in currentNode.children) {
        dfs(currentNode.children[char], currentPrefix + char);
      }
    };

    dfs(node, prefix);

    return result;
  }
}
export default Trie