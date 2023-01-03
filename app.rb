require 'rss'

rss = RSS::Parser.parse('https://takagi.blog/rss.xml')
rss.items.each.with_index(1) do |item, i|
  puts "INSERT INTO articles VALUES (#{i}, '#{item.title}', '#{item.link}');"
end
