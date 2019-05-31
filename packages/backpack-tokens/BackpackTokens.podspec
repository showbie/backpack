Pod::Spec.new do |s|
  s.name = 'BackpackTokens'
  s.version = '0.1.3'
  s.license = { :type => 'ISC' }
  s.homepage = 'https://backpack-tokens.now.sh'
  s.authors = { 'Jeff Nelson' => 'jeff@showbie.com' }
  s.summary = 'Design tokens for the Backpack design system at Showbie'
  s.source = { :git => 'https://github.com/showbie/backpack-tokens.git', :tag => 'v0.1.3' }
  s.swift_version = '4.2'
  s.ios.deployment_target = '10.0'
  s.source_files = 'dist/*.swift'
end
